import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="mb-4 text-xl font-semibold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="mb-4 font-semibold text-md">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };

      console.log(post);
    
    return (
        <div className='mx-auto mt-32 max-w-[540px] w-full'>
            {post.length === 0 ? null : (
                <>
                    <img src={post.heroImage.url} />
                    <h1>{post.title}</h1>
                    <p>{post.excerpt}</p>
                    {post.categories.map((category, index) => (
                        <div key={index}>
                            <p>{category.type}</p>
                        </div>
                    ))}
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) =>
                            getContentFragment(itemindex, item.text, item)
                        );

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </>
            )}
        </div>
    );
    };
    
    export default PostDetail;