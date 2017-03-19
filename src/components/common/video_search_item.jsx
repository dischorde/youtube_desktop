import React from 'react';

class VideoSearchItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    const { description, title, channelTitle, publishedAt } = this.props.vid.snippet;
    const { url } = this.props.vid.snippet.thumbnails.medium;

    return (
      <div className="index-item">
        <div className="index-item-left">
          <img src={url} />
        </div>
        <div className="index-item-right">
            <h1>{title}</h1>
            <p>{channelTitle}</p>
            <p>{description.slice(0, 350) + '...'}</p>
        </div>
      </div>
    );
  }
}

export { VideoSearchItem };
