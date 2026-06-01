import json
from urllib import request, parse, error

def load_env(path):
    env = {}
    with open(path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if '=' in line:
                k, v = line.split('=', 1)
                env[k.strip()] = v.strip()
            else:
                env['OPENAI_API_KEY'] = line.strip()
    return env

env = load_env('.env')

def test_google(key):
    url = 'https://maps.googleapis.com/maps/api/geocode/json?' + parse.urlencode({'address': 'Statue of Liberty', 'key': key})
    try:
        with request.urlopen(url, timeout=20) as r:
            data = json.load(r)
        status = data.get('status')
        if status in ('OK', 'ZERO_RESULTS'):
            return True, status
        return False, status or 'no-status'
    except error.HTTPError as e:
        try:
            data = json.load(e)
            return False, data.get('error_message', str(e))
        except Exception:
            return False, str(e)
    except Exception as e:
        return False, str(e)


def test_anthropic(key):
    req = request.Request('https://api.anthropic.com/v1/models', headers={'x-api-key': key})
    try:
        with request.urlopen(req, timeout=20) as r:
            data = json.load(r)
        return True, 'models-present' if 'models' in data else 'unexpected-response'
    except error.HTTPError as e:
        try:
            data = json.load(e)
            return False, data.get('detail', data.get('error', str(e)))
        except Exception:
            return False, str(e)
    except Exception as e:
        return False, str(e)


def test_openai(key):
    req = request.Request('https://api.openai.com/v1/models', headers={'Authorization': f'Bearer {key}'})
    try:
        with request.urlopen(req, timeout=20) as r:
            data = json.load(r)
        return True, 'models-present' if 'data' in data else 'unexpected-response'
    except error.HTTPError as e:
        try:
            data = json.load(e)
            err = data.get('error')
            if isinstance(err, dict):
                return False, err.get('message', str(e))
            return False, err or str(e)
        except Exception:
            return False, str(e)
    except Exception as e:
        return False, str(e)


def test_deepseek(key, url):
    if not url:
        return False, 'missing-url'
    payload = json.dumps({
        'model': 'gpt-4o-mini',
        'messages': [{'role': 'user', 'content': 'ping'}],
        'temperature': 0.0,
        'max_tokens': 1
    }).encode('utf-8')
    req = request.Request(url, data=payload, headers={
        'Authorization': f'Bearer {key}',
        'Content-Type': 'application/json'
    })
    try:
        with request.urlopen(req, timeout=20) as r:
            data = json.load(r)
        return True, 'response-ok'
    except error.HTTPError as e:
        try:
            data = json.load(e)
            return False, data.get('error', data.get('message', str(e)))
        except Exception:
            return False, str(e)
    except Exception as e:
        return False, str(e)

results = []
if 'GEMINI_API_KEY' in env:
    results.append(('GEMINI_API_KEY',) + test_google(env['GEMINI_API_KEY']))
if 'CLAUDE_API_KEY' in env:
    results.append(('CLAUDE_API_KEY',) + test_anthropic(env['CLAUDE_API_KEY']))
if 'OPENAI_API_KEY' in env:
    results.append(('OPENAI_API_KEY',) + test_openai(env['OPENAI_API_KEY']))
if 'DEEPSEEK_API_KEY' in env:
    results.append(('DEEPSEEK_API_KEY',) + test_deepseek(env['DEEPSEEK_API_KEY'], env.get('DEEPSEEK_API_URL')))

for name, ok, msg in results:
    print(f'{name}: {"PASS" if ok else "FAIL"} - {msg}')
if not results:
    print('No recognizable API keys found.')
