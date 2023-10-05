const TourItem = ({ article }) => {
    const {
      MAIN_TITLE, /* 콘텐츠 */
      TITLE, /* 제목 */
      TRFC_INFO, /* 교통정보 */
      MAIN_IMG_NORMAL, /* 이미지 */
      HOMEPAGE_URL, /* 홈페이지 */
      GUGUN_NM /* 구군 */
    } = article;
    return (
      <div className="travel_item">
        <div className="title">
          <strong>{GUGUN_NM}</strong> {/* 구, 군 */}
          <h4>{MAIN_TITLE}</h4> {/* 콘텐츠명 */}
          <span>{TITLE}</span> {/* 제목 */}
        </div>  
        {/* .title end */}
        <img src={MAIN_IMG_NORMAL} alt={MAIN_TITLE} />
         
        <p>{TRFC_INFO}</p>
        {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">
          바로가기
        </a>}
      </div> /* travel_item end */
    );
  };
  export default TourItem;
  