---
name: To Do 리스트
about: todo list 작성
title: To Do 리스트
labels: ''
assignees: ''

---

구현에 따라 체크박스를 하나씩 체크해가면서, 프로젝트의 필수 혹은 권장할 만한 진행 상황을 확인할 수 있습니다.
### BARE MINIMUM
1. 시스템 아키텍처
- [ ] JWT를 이용한 로그인 구현 | 필수 | ★

2. UI/UX
 - [ ] 회원가입, 로그인, 로그아웃, 마이페이지, 회원탈퇴 기능 구현 | 필수 | 프론트엔드, 백엔드 | ★ |  
 - [ ] 회원가입, 로그인 및 회원정보 수정 시 유효성 검사 | 필수 | 프론트엔드 | ★ |  
 - [ ] 소셜 로그인 외 서비스 자체 회원가입 기능 제공 | 필수 | 프론트엔드 | ★ |  
 - [ ] 회원가입 없이 '체험하기' 형식으로 가볍게 기능을 이용할 수 있는 장치 마련 | 필수(Final only) | 프론트엔드 | ★ |  
 - [  ] 회원 탈퇴나 리소스 삭제시 확인(confirm) 모달 제공 | 권장 | 프론트엔드 | ★ |  
 - [ ] 마이페이지를 통해 사용자 개인정보 수정 기능 제공 | 필수 | 프론트엔드 | ★ |  
 - [ ] \ (소셜 로그인이 아닐 경우) 비밀번호 수정 기능 제공 | 필수 | 프론트엔드 | ★
 - [ ] 라이브러리를 사용하지 않고 React 컴포넌트 직접 작성 (유어클래스에서 다룬 것) | 필수 | ★
 - [ ] 3rd-party API 호출 | 권장 | ★
 
 - [ ] 라이브러리를 사용하지 않고 React 컴포넌트 직접 작성 (유어클래스에서 다루지 않은 것) | 권장 | ★★★
 - [ ] S3로 파일 업로드 | 권장 | ★★★
 
3. 스키마 및 API
 - [ ] N:M (다대다) 관계 설정 | 필수 | ★
 - [ ] ERD (DB Diagram) 작성 | 필수 | ★
 - [ ] API 작성 툴 (Swagger, Postman, Gitbook API) 사용 | 필수 | ★★
 - [ ] ORM 사용 (sequelize, typeorm 권장) | 권장 | ★
 - [ ] 페이지네이션 구현 | 권장 | ★★★

4. DevOps
 - [ ] [코드] precommit 단계에서 semistandard 적용 | 필수 | ★
 - [ ] [릴리즈] 깃허브 커밋메세지 규칙 합의 | 필수 | ★
 - [ ] [코드] 버전 규칙 합의 | 필수 | ★
 - [ ] [릴리즈] PR 형식 합의 | 권장 | ★
 - [ ] [배포] 도메인 구매 및 HTTPS 배포 | 권장 | ★★★
 
### Advanced (도전) 
- [ ] OAuth 2.0을 이용한 소셜 로그인 | 권장 | ★
- [ ] 모바일 환경 대응 및 반응형 웹 | 권장 | ★★

Nightmare (신중) 
- [ ] [배포] 배포 자동화 설정 | 권장 | ★
- [ ] 무한 스크롤 | ★★★
- [ ] TypeScript 언어 사용 | ★★★
