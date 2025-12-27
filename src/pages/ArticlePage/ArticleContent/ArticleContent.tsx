import type { Article } from '../../../types/Article';
import './ArticleContent.scss';

type Props = {
  article: Article;
};

export const ArticleContent: React.FC<Props> = ({ article }) => {
  console.log(article.summary);
  return (
    <div className="article-content">
      <h1 className="article-content-title">{article.title}</h1>

      <div className="article-content-summary">
        <p>{article.summary}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores
          dolorum exercitationem ut, nobis reiciendis. Debitis autem, provident,
          temporibus quidem voluptates illo ut, sequi nam fugiat unde natus
          dolores eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae, similique! Quam, itaque autem impedit facere harum ipsam quidem
          aliquid debitis non aperiam nesciunt nemo quod possimus voluptas,
          corrupti eum! Ad? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste sequi modi obcaecati neque, possimus corporis sapiente
          officia blanditiis autem repudiandae id pariatur nulla cum odio
          laborum? Maxime debitis possimus a?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quos
          doloremque laborum, eum quas, ipsa illo sapiente id, cumque quam odit
          ab totam consequatur maxime eveniet? Tenetur magnam perferendis
          ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          nihil nam et enim error aliquid. Assumenda soluta asperiores odit
          commodi natus, atque similique voluptatem quos dolorem dolores magnam
          voluptas consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores
          dolorum exercitationem ut, nobis reiciendis. Debitis autem, provident,
          temporibus quidem voluptates illo ut, sequi nam fugiat unde natus
          dolores eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae, similique! Quam, itaque autem impedit facere harum ipsam quidem
          aliquid debitis non aperiam nesciunt nemo quod possimus voluptas,
          corrupti eum! Ad? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste sequi modi obcaecati neque, possimus corporis sapiente
          officia blanditiis autem repudiandae id pariatur nulla cum odio
          laborum? Maxime debitis possimus a? Lorem ipsum dolor.
        </p>
      </div>
    </div>
  );
};
