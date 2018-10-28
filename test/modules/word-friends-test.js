const expect = require('chai').expect;
const wf = require('../../modules/word-friends.js');

describe('Word Friends', () => {
  describe('Translate', () => {
    it('should translate topologically same words into a same word', () => {
      const w11 = wf.translate('asdf');
      const w12 = wf.translate('dfgh');
      expect(w11).to.equal(w12);

      const w21 = wf.translate('asdf');
      const w22 = wf.translate('asdg');
      expect(w21).to.equal(w22);

      const w31 = wf.translate('aaa');
      const w32 = wf.translate('ddd');
      expect(w31).to.equal(w32);

      const w41 = wf.translate('b');
      const w42 = wf.translate('c');
      expect(w41).to.equal(w42);
    });

    it('should translate topologically different words of different length into different words', () => {
      const w1 = wf.translate('asdf');
      const w2 = wf.translate('asdfa');
      expect(w1).not.to.equal(w2);
    });

    it('should translate topologically different words of same length into different words', () => {
      const w1 = wf.translate('asdf');
      const w2 = wf.translate('asda');
      expect(w1).not.to.equal(w2);
    });
  });

  describe('Count Friends', () => {
    it('should count 0 on empty wordlist', () => {
      expect(wf.countFriends([])).to.equal(0);
    });
    it('should count 0 on wordlist of size 1', () => {
      expect(wf.countFriends(['a'])).to.equal(0);
    });
    it('should count 0 on wordlist without friends', () => {
      expect(wf.countFriends(['a', 'aa', 'ab', 'aba', 'aab', 'abb', 'abc', 'abca'])).to.equal(0);
    });
    it('should count 2 friends', () => {
      expect(wf.countFriends(['a', 'a'])).to.equal(2);
      expect(wf.countFriends(['a', 'aa', 'ab', 'aba', 'aab', 'abb', 'abc', 'abca', 'cba'])).to.equal(2);
    });
    it('should count 3 friends', () => {
      expect(wf.countFriends(['a', 'a', 'b'])).to.equal(3);
      expect(wf.countFriends(['a', 'aa', 'ab', 'aba', 'aab', 'abb', 'abc', 'abca', 'cba', 'gfx'])).to.equal(3);
    });
    it('should count 4 friends', () => {
      expect(wf.countFriends(['a', 'a', 'b', 'c'])).to.equal(4);
      expect(wf.countFriends(['a', 'aa', 'ab', 'aba', 'aab', 'abb', 'abc', 'abca', 'cba', 'fsdf'])).to.equal(4);
    });
  });
});
