

const Article = ({article}) => (
  <div className="card border-primary mb-3">
    <div className="card-header">{article.title}</div>
    <div className="card-body">
      <p className="text-info">
        {article.abstract}
      </p>
      {/* <a className="text-success">[read more]</a> */}
      <div className="badge">{article.published_date}</div>
      <div className="float-right">
        <a href={article.url}>read the origin post</a>
      </div>
    </div>
  </div>
)

export default Article;
