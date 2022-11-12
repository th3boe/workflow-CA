import { login } from './login';

const BAD_EMAIL = 'blueberry!@gmail.no';
const EMAIL = 'boepizza@noroff.no';
const PASSWORD = 'Pizza1234';
const TOKEN = 'blue123yhn';

const user = {
  name: 'Boe',
  email: EMAIL,
};

class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  clear() {
    this.value = {};
  }

  getItem(key) {
    return this.value[key] || null;
  }

  setItem(key, value) {
    this.value[key] = String(value);
  }

  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

function signinSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Passed authorization',
    json: () => Promise.resolve({ ...user, TOKEN }),
  });
}

function signinFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Invalid authorization',
  });
}

describe('login', () => {
  it('will return a valid token when provided with valid authorization', async () => {
    global.fetch = jest.fn(() => signinSuccess());
    const profile = await login(EMAIL, PASSWORD);
    expect(EMAIL).toMatch('@noroff.no');
    expect(PASSWORD).toMatch('Pizza1234');
    expect(profile.TOKEN).toEqual(TOKEN);
  });

  it('will throw error when provided with invalid authorization', async () => {
    global.fetch = jest.fn(() => signinFailure());
    await expect(login(BAD_EMAIL, PASSWORD)).rejects.toThrow(
      'Invalid authorization'
    );
  });
});
