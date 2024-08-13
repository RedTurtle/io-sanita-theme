import { useEffect, useState } from 'react';
const readingTime = (title, description, htmlBody) => {
  const body = htmlBody.current.textContent;
  const text = `${title} ${description} ${body}`;
  const wordsPerMinute = 200;
  let plain_text = text.replace(/<[^>]*>/g, '');
  let wordsCount = plain_text.split(' ').length;
  return wordsCount > 0 ? Math.ceil(wordsCount / wordsPerMinute) : 0;
};

//Hook per avere il reading time di una pagina
export const useReadingTime = (content, documentBody) => {
  const [readingtime, setReadingtime] = useState(0);

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setReadingtime(
          readingTime(content.title, content.description, documentBody),
        );
      }
    }
  }, [content.description, content.title, documentBody]);

  return { readingtime, setReadingtime };
};
