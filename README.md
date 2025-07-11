=======
# 2025_CHALLKATHON_Nulls_FE
Null_s 팀

# ⏳ 인생 시계 (Life Clock)

> "내 인생 몇 % 살았지?"  
프로젝트 "인생 시계"는 사용자의 출생부터 기대 수명까지의 삶을 하나의 긴 타임라인(바 형태)으로 시각화하여, 인생의 흐름과 밀도를 직관적으로 보여주는 웹 기반 서비스입니다. 사용자는 자신의 과거 주요 이벤트를 타임라인에 직접 기록할 수 있으며, 앞으로의 계획이나 목표도 함께 추가할 수 있습니다. 이를 통해 지나온 시간을 되돌아보고, 남은 시간을 어떻게 채워나갈지 생각해보는 계기를 제공합니다. 삶이 답답하고 막막하게 느껴질 때, 또는 나의 삶에 대한 동기 부여가 필요할 때, 인생 시계는  데이터 기반 통찰을 통해 나 자신을 돌아보게 만드는 의미 있는 도구가 될 것입니다.

📌 주제 요약: "인생 시계 (Life Clock)"
사용자가 생년월일과 기대 수명을 입력하면,
현재 인생이 몇 % 진행됐는지 시각적으로 보여주는 웹 앱

---

## 👩‍💻 개발자 소개

| 이름 | 역할 | GitHub |
|------|------|--------|
| 곽현철 | 프론트엔드 개발, UI/UX 디자인 |  |
| 서정혁 | 백엔드 개발, DB 설계 |  |
| 서정훈 | 전체 기획, 기능 통합, 시각화 | |

---

## 🛠️ 사용 기술 스택 (프론트엔드)

- **React** : 컴포넌트 기반 UI를 효율적으로 구성  
- **TypeScript** : 정적 타입을 통한 안정적인 코드 작성  
- **Vite** : 빠르고 가벼운 번들러로 개발 환경 최적화  
- **MUI (Material UI)** : 반응형 UI 구성에 사용된 컴포넌트 기반 프레임워크  
- **Recoil** : 글로벌 상태 관리 (예: 사용자 정보, 테마 상태 등)  
- **date-fns** : 날짜 계산 및 포맷팅을 위한 경량 라이브러리


## 📂 파일 구조 (FE 기준)
파일 구조
2025_CHALKATHON_Nulls_FE/
├── public/
│   └── vite.svg                 # Vite 기본 아이콘
│
├── src/
│   ├── assets/                 # 이미지 및 정적 파일
│   │   ├── alice-bg.png
│   │   └── react.svg
│
│   ├── components/             # 재사용 가능한 UI 컴포넌트
│   │   ├── Effects/
│   │   │   └── BirthdayOverlay.tsx       # 생일 축하 이펙트 (폭죽 등)
│   │   ├── Header/
│   │   │   └── Header.tsx                # 상단 헤더 UI
│   │   ├── Modals/
│   │   │   └── EventModal.tsx            # 타임라인 이벤트 추가 모달
│   │   ├── Shared/
│   │   │   ├── Button.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── Input.tsx                 # 공통 UI 요소 (재사용용)
│   │   ├── Stats/
│   │   │   ├── LifeCalculator.tsx        # 생일 기반 인생 퍼센트 계산기
│   │   │   ├── LifeDonutChart.tsx        # 도넛 차트 형태의 인생 퍼센트
│   │   │   └── StatOverlay.tsx           # 통계 요소 오버레이
│   │   └── Timeline/
│   │       ├── EventItem.tsx             # 타임라인 마커 (점)
│   │       ├── EventTooltip.tsx          # 마우스오버 툴팁
│   │       ├── LifeAnalyzer.tsx          # 통계 분석용 유틸
│   │       ├── LifeProgressBar.tsx       # 퍼센트 기반 진행 바
│   │       ├── TimelineBar.tsx           # 전체 타임라인 렌더링
│   │       └── TimelineEditor.tsx        # 타임라인 편집 기능
│
│   ├── pages/                  # 주요 페이지 구성
│   │   ├── LandingPage.tsx          # 랜딩 페이지
│   │   ├── LoginPage.tsx            # 로그인
│   │   ├── SignupPage.tsx           # 회원가입
│   │   ├── MainPage.tsx             # 로그인 후 홈
│   │   ├── MainTimelinePage.tsx     # 타임라인 중심 페이지
│   │   ├── EditProfilePage.tsx      # 프로필 수정
│   │   ├── SettingsPage.tsx         # 설정
│   │   ├── VerifyPasswordPage.tsx   # 비밀번호 재확인
│   │   └── NotFoundPage.tsx         # 404 페이지
│
│   ├── App.tsx                  # 전체 라우팅 및 레이아웃 구성
│   ├── userState.ts             # 사용자 상태 (Recoil 기반)
│   ├── main.tsx                 # React 진입점
│   ├── App.css / index.css      # 전역 스타일
│   └── vite-env.d.ts
│
├── package.json                 # 프로젝트 메타정보
├── tsconfig.json                # TypeScript 설정
├── vite.config.ts               # Vite 환경 설정
├── .gitignore
├── README.md


## 🎯 기능별 소개 (프론트엔드)

---

### 1. 🔐 로그인 & 회원가입
- 사용자가 **이메일과 비밀번호**로 계정을 생성하고 로그인할 수 있습니다.  
- 로그인 성공 시 **JWT 토큰**을 저장하고, 사용자 정보를 **Recoil 상태**로 전역 관리합니다.  
- 로그인 후에는 자동으로 **메인 타임라인 페이지**로 이동합니다.

---

### 2. 📊 인생 퍼센트 계산기
- **생년월일과 기대 수명**을 입력하면, 현재까지 살아온 인생 퍼센트를 계산합니다.  
- 계산된 퍼센트는 **퍼센트 바**와 **도넛 차트** 형태로 시각화됩니다.  
- 현재 **나이**와 **다음 생일까지 남은 일수**도 함께 표시됩니다.  
- 사용자의 나이를 기준으로, **평균 이정표 나이(첫 연애, 결혼 등)** 와 비교하여  
  얼마나 지났거나 남았는지도 직관적으로 안내합니다.

---

### 3. 🎉 생일 이펙트
- 오늘이 사용자의 **생일**이면, **폭죽 애니메이션**과 함께 **축하 메시지**가 나타납니다.  
- 애니메이션은 약 **7초간** 유지되며, 이후 자동으로 사라집니다.  
- 메시지는 **화면 중앙 정렬**, **부드러운 그라데이션 배경**과 함께 시각적으로 표현됩니다.

---

### 4. 🕒 타임라인 기능
- 사용자의 인생 이정표를 **타임라인 형태**로 시각화하여 보여줍니다.  
- 평균 연령 기반 이정표도 함께 표시되며, **StatOverlay**를 통해  
  현재 내가 어느 위치에 있는지 **감각적으로 표현**됩니다.

---

### 5. 🧑‍💼 프로필 수정
- 로그인된 사용자는 자신의 **생년월일**, **닉네임** 등의 정보를 수정할 수 있습니다.  
- 수정된 정보는 **즉시 백엔드에 반영**되며, 페이지 새로고침 없이 바로 적용됩니다.

---

### 6. ⚙️ 설정 & 비밀번호 확인
- 민감한 정보 수정을 위해, **비밀번호 재확인 페이지**를 별도로 구성했습니다.  
- **설정 페이지**에서는 로그아웃, 사용자 정보 확인 등의 기능도 함께 제공합니다.

---

### 7. ❌ 에러 처리 & NotFound 페이지
- 존재하지 않는 경로 접근 시, 사용자 친화적인 **404 Not Found 페이지**를 제공합니다.  
- 전반적으로 앱 전체에서 **예외 상황에 대한 대응** 처리를 강화하였습니다.

