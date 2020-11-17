import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';

const BlogPreviewItem = (props) => {
  let match = useRouteMatch();
  let maxCharInPreview = 50; 

  return (
    <article>
      <div>
        <h3>{props.title}</h3>
        <Markdown source={props.icon} />
        <Markdown
          source={props.content
            .split(' ')
            .splice(0, maxCharInPreview)
            .join(' ')
            .concat('...')}
        />
      </div>
      <div className="level">
        <div className="level-left">
          <Link
            className="level-item button is-small is-link is-outlined"
            to={{ pathname: `${match.url}/${props.path}`, ...props }}
          >
            Read More
          </Link>
        </div>
        <div className="level-right">
          <p className="level-item has-text-link is-size-7">
            {moment(props.publishDate).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY',
            })}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPreviewItem;
