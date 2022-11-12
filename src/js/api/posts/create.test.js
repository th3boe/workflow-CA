import { createPost } from './create';

const TITLE = 'title test';
const TAG = 'tag test';
const MEDIA = 'https://picsum.photos/200';
const BODY = 'body test';

const response = {
  title: TITLE,
  tag: TAG,
  media: MEDIA,
  body: BODY,
};

function createPostSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Successful creation',
    json: () => Promise.resolve({ ...response }),
  });
}

function createPostFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'The post creation failed',
  });
}

describe('create post', () => {
  it('successfully creates a new post on the API', async () => {
    global.fetch = jest.fn(() => createPostSuccess());
    const thePost = await createPost(TITLE, BODY, MEDIA, TAG);
    expect(thePost).toEqual(response);
    expect(thePost.title).toEqual(TITLE);
    expect(thePost.tag).toEqual(TAG);
    expect(thePost.media).toEqual(MEDIA);
    expect(thePost.body).toEqual(BODY);
  });

  it('failed to create a new post on the API', async () => {
    global.fetch = jest.fn(() => createPostFailure());
    await expect(createPost(TITLE, TAG, MEDIA, BODY)).rejects.toThrow(
      'The post creation failed'
    );
  });
});
