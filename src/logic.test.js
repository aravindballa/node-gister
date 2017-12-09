import { getPostData } from './logic.js'

test('typeof content should be string', () => {
  let content = getPostData('test-file.js').files['test-file.js'].content
  expect(typeof content).toBe('string')
})
