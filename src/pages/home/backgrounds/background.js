import React from 'react';
import BackgroundComet from './bacgroundComet';
import Stars from './Stars';
import BackgroundStar from './backgroundStar';
import BackgroundCloud from './backgroundCloud';
import UrlRescusive from '../../../components/UrlRecursive';
import _ from 'lodash';

export default function Background(props) {
  const {url_api} = props;
  return (
    <UrlRescusive data={props}>
      <div className='playelu-background'>
        <BackgroundCloud />
        <BackgroundComet />
        <BackgroundStar />
        <div className='shooting-star'>
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
          <Stars imgUrl={_.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5} />
        </div>
        {/* <CloudBottom /> */}
      </div>
    </UrlRescusive>
  );
}
