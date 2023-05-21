

const Blog = () => {
  return (
    <div className="mb-5 mt-5">
      <h4 className="text-3xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
      <p className="text-2xl font-semibold"> Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data.Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.</p>
      <br />
      <h4 className="text-3xl font-bold">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable?</h4>
      <p className="text-2xl font-semibold">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
      <br />
      <h4 className="text-3xl font-bold">What is express js? What is Nest JS?</h4>
      <p className="text-2xl font-semibold">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
      <br />
      <h4 className="text-3xl font-bold">What is MongoDB aggregate and how does it work?</h4>
      <p className="text-2xl font-semibold">Mongodb aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. </p>
    </div>
  );
};

export default Blog;