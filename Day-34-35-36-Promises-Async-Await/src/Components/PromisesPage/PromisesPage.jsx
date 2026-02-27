import { useEffect } from "react";

export default function PromisesPage() {
  useEffect(() => {
    promisesStatus();
  });
  const promisesStatus = new Promise((reslove, reject) => {
    setTimeout(() => {
      const response = fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (response) {
        reslove("success", reslove.PromiseState);
      } else {
        reject(new Error(" Failed "));
      }
    }, 2000);
  });

  console.log(promisesStatus);
  console.log(promisesStatus.promisesStatus);

  return (
    <>
      <h3>Promises Status:{promisesStatus()} </h3>
    </>
  );
}
