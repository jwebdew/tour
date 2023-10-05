import axios from "axios";
import { useState, useEffect } from "react";
import TourItem from "./TourItem";

const TourList = () => {
    const key =
        "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D";
    // "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D"
    const pageNo = "pageNo=1"; 

    // const [loading, setLoading] = useState(true);
    const [tour, setTour] = useState([]);

    //동기 : 동시에 진행. 요청과 그 결과과 동시에 그 자리에서 결과가 주어짐. 일어난다는 약속.
    //순서에 맞춰 진행되는 장점. 여러가지 요청을 동시에 진행 불가능, 결과가 주어질때가지 아무것도 못하고 대기

    //비동기 : 동시에 일어나지 않음. 여러개의 요청을 동시에 처리장점. 속도는 떨어짐. 결과가 주어지는데 시간이 걸리더라도 
    //그시간동안 다른작업 가능.

    useEffect(() => {
        //🔔 비동기로 작업하기 위해 사용하는 키워드
        //async[에이싱크] : 실행되는 함수 앞에 키워드 추가
        //await[어웨이트] : 함수 내부에서 Promise 앞부분에 await 키워드를 사용

        const tourData = async () => {
            // setLoading(true);

            //try, catch
            //에러가 발생할 대 스크립트 중단되고 콘솔에 에러 출력되도록 설정
            //에러가 없다면 try안에서 코드 실행
            //에러있다면 try는 중단되고 catch넘어가서 실행
            
            try {
                const response = await axios.get(
                    `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${key}&${pageNo}&numOfRows=10&resultType=json`
                );
                setTour(response.data.getRecommendedKr.item);
            } catch (error) {
                console.log(error);
            }
            // setLoading(false);
        };
        tourData();
    }, []);

    // if (loading) {
    //   return <div>대기중...</div>;
    // }
    console.log(tour);

    // if (!articles) {
    //   return null;
    // }

    return (
        <div className="tour_list">
            <h3>부산 명소</h3>
            <div className="main_content">
                {tour.map((articleMap) => (
                    <TourItem key={articleMap.id} article={articleMap} />
                ))}
            </div>
            {/* main_content */}
        </div> /* news_list end */
    );
}
export default TourList;