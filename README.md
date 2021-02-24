# JYP (Judge Your Plate)

# 팀원

## Planner

- [계대환](https://github.com/gyedaehwan)

## Designer

- [이현성](https://github.com/hyeonseong-design)
- [이혜원](https://github.com/hyeww0546)

## Back-End

- [김지민](https://github.com/PrrrStar)
- [허상](https://github.com/heosang)

## Front-End

- [서준혁](https://github.com/taulmax)
- [손수민](https://github.com/codeamor)

## App

- [유찬양](https://github.com/ChanYangYu)
- [이준영](https://github.com/jun991203)

<br>

# 기술 스택

- React.js
- TypeScript
- Redux
- Storybook

# Front-End 함수명

| Summery              | 함수명          | 비고 |
| -------------------- | --------------- | ---- |
| 회원가입             | signup          |      |
| 로그인               | login           |      |
| 이메일 중복 체크     | emailDuplicated |      |
| 약관동의 유효성 함수 | agreeCheck      |      |
| 그룹 생성            | groupCreate     |      |

추가 예정

<br>

# Branch

> main: 배포 브랜치 (실제 제품)

> develop: 개발 브랜치 (개발 상황 종합)

> update/develop: (develop 브랜치 자체적으로 수정 사항 발생시 사용)

> 기능별

- feature/signup: 회원가입
- feature/login: 로그인
- feature/main: 메인 페이지

추가 예정

# Commit 메세지 규칙

- build: 빌드 시스템이나 외부 의존성 문제를 바꿨을 때 <br>
  ex) build: npm 설정 변경, query-dsl 라이브러리 추가

- chore: 잡동사니 <br>
  ex) chore: 들여쓰기 수정, 안쓰는 파일 삭제

- ci: CI 설정 파일이나 스크립트 변경 <br>
  ex) ci: 트래비스 설정파일 변경 > timeout 주기 2초로 변경

- docs: 문서파일 변경 <br>
  ex) docs: README.md 수정

- feat: 새로운 파일 추가 <br>
  ex) feat: Balance 도매인 객체 추가

- fix: 코드 변경이나 버그 수정 <br>
  ex) feat: Balance 객체 hexString parsing 문제 해결

- revert: 이전으로 되돌리기 <br>
  ex) revert: 컨트롤러 충돌 문제로 revert 요청

- perf: 코드 퍼포먼스 개선 <br>
  ex) perf: 스레드 풀과 배치 퍼포먼스 개선으로 모니터링 주기 단축

- test: 테스트 코드 추가 <br>
  ex) test: 입출금 시스템 집금 시나리오 A 테스트 코드 추가
