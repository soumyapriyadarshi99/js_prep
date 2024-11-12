async function abortControll() {
  const abortController = new AbortController();
  const timeout = setTimeout(() => abortController.abort(), 1000);
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: abortController.signal,
    });
    console.log(result);
    clearTimeout(timeout);
  } catch (err) {
    console.log(err);
    clearTimeout(timeout);
    console.log(err);
  } finally {
    clearTimeout(timeout);
  }
  console.log("hello1");
}

abortControll();
