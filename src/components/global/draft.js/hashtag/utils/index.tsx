import regexes from './hashtagRegex';

/* eslint-disable */
export function extractHashtagsWithIndices(text: any) {
    if (!text || !text.match(regexes.hashSigns)) {
        return [];
    }
    var tags: any[] = [];

    text.replace(regexes.validHashtag, function (
        match: any,
        before: any,
        hash: any,
        hashText: any,
        offset: any,
        chunk: any,
    ) {
        const after = chunk.slice(offset + match.length);
        if (after.match(regexes.endHashtagMatch)) {
            return;
        }
        const startPosition = offset + before.length;
        const endPosition = startPosition + hashText.length + 1;
        tags.push({
            hashtag: hashText,
            indices: [startPosition, endPosition],
        });
    });

    return tags;
}
