# webAPIs_sizes

## Mini-projects with web apis(size)

> 브라우저의 크기를 변경할때(resize)마다 그에 맞는 size가 변경되어 출력된다.

| web API                                                                                        | Info                                                                                            |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| (window.)screen                                                                                | 사용하는 모니터의 가로,세로의 값을 알 수 있다.                                                  |
| (window.)outerWidth & (window.)outerHeight                                                     | 사용하는 Browser(브라우저)의 가로,세로의 값을 알 수 있다.                                       |
| (window.)innerWidth & (window.)innerHeight                                                     | 사용하는 Document(실제로 HTML이 사용하는 부분)의 가로,세로의 값을 알 수 있다.                   |
| (window.)document.documentElement.clientWidth & (window.)document.documentElement.clientHeight | 사용하는 Document(현재 브라우저에 보여지는 HTML이 사용하는 부분)의 가로,세로의 값을 알 수 있다. |
| (window.)addEventListener                                                                      | window, 즉 브라우저에 이벤트시(resize) callback function(size())이 호출되도록 설정              |

## 배운점

|번호|내용|
|:--:|--|
|1| 크기를 표현하는 web api중에서도 정확히 어느 부분의 크기를 나타내는지 알 수 있었다.|
|2|window는 최상위 object이기 때문에 생략이 가능하다.|
