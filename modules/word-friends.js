"use strict";

/**
 * Returns lexicographic substitution (1-1) of equivalent topology (reversible with known mapping).
 * Mapping is based on order of appearance of the letter in the word.
 */
function _translate(word) {
  const length = word.length;
  if (length <= 1) {
    return length == 1 ? String.fromCharCode(0) : "";
  }

  let letters = "";
  let bucket = [word[0]];

  for (let i = 1; i < length; i++) {
    let currChar = word[i];
    let ord = bucket.indexOf(currChar);
    if (ord === -1) {
      bucket.push(currChar);
      ord = bucket.length - 1;
    }

    // For print/read-ability, use offset of 98 ('a')
    letters += String.fromCharCode(98 + ord);
  }

  return letters;
}

/**
 * Returns number of words with at least one friend. Works with translated wordlist.
 * Better mem/time performance than groupBy, filter, count combination.
 */
function _countFriendsTranslated(translatedWords) {
  let friends = 0;
  const words = translatedWords.sort();
  if (words.length > 1) {
    let current = words[0]
      , firstHit = true;
    for (let i = 1; i < words.length; i++) {
      if (words[i] === current) {
        if (firstHit) {
          friends += 2;
          firstHit = false;
        } else {
          friends ++;
        }
      } else {
        current = words[i];
        firstHit = true;
      }
    }
  }

  return friends;
}

/**
 * Returns number of words with at least one friend.
 */
function _countFriends(words) {
  return _countFriendsTranslated(words.map(_translate));
}

exports.translate = _translate;
exports.countFriends = _countFriends;
