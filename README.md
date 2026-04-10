# Blue_Screen: YouTube Boss Rush

> **"당신의 브라우저를 블루스크린으로부터 지키세요!"** > 유튜브 UI를 활용한 혁신적인 웹 기반 보스 러시 액션 게임입니다.

---

## 팀원 역할 분담 (Team Members & Roles)

| 이름 | 역할 | 핵심 책임 및 상세 작업 |
| :--- | :---: | :--- |
| **박재영** | **Client / Logic** | • 게임 전체 루프(`requestAnimationFrame`) 설계 및 관리<br>• Player 클래스 구현 (이동, 회피, 공격 로직 및 애니메이션)<br>• 객체 간 충돌 판정 및 데미지 시스템 구축<br>• 실시간 게임 데이터 처리 및 성능 최적화 |
| **한지연** | **Boss & Pattern** | • Boss 클래스 및 상태 머신(FSM) 설계<br>• 보스별 공격 패턴 및 기믹 알고리즘 제작<br>• 게임 밸런싱 (보스 체력, 공격 속도, 난이도 조절)<br>• 보스별 페이즈 전환 및 특수 연출 로직 담당 |
| **강서현** | **UI / System** | • 유튜브 테마 UI 디자인 및 구현 (HTML/CSS/DOM 제어)<br>• 인터렉티브 시스템 (검색창 키워드 감지, 배속 설정, 광고 팝업)<br>• 사운드 매니저 구현 및 리소스 관리<br>• 세이브 데이터(localStorage) 및 화면 전환 시스템 구축 |

---

## 주차별 개발 마일스톤 (Milestones)

### **1주차: 기초 시스템 구축**
- [ ] Canvas 렌더링 환경 세팅 및 에셋 로드 시스템
- [ ] 플레이어 기본 이동 및 회피 기능 구현
- [ ] 초기 게임 루프 및 씬 관리자 베이스 작업

### **2주차: 핵심 전투 메커니즘**
- [ ] 보스 베이스 클래스 및 1번 보스 기초 패턴 구현
- [ ] 공격-피격 판정(Collision Detection) 및 체력 시스템
- [ ] 보스 페이즈 전환 로직 테스트

### **3주차: 유튜브 인터렉션 기믹**
- [ ] 유튜브 UI 오버레이 작업 (영상 플레이어 테마)
- [ ] 게임 배속(0.5x / 2x) 및 검색어 입력 연동 시스템
- [ ] 광고(Ad) 발생 이벤트 및 튜토리얼/메인 화면 구축

### **4주차: 콘텐츠 확장 및 폴리싱**
- [ ] 추가 보스(2~3번) 및 패턴 다양화
- [ ] 게임 오버(블루스크린) 연출 및 사운드 효과 삽입
- [ ] 전체적인 난이도 조정 및 최종 버그 수정

---

## 기술 스택 (Tech Stack)
- **Language**: JavaScript (ES6+)
- **Graphics**: HTML5 Canvas API
- **Styling**: HTML5 / CSS3 (YouTube UI Clone)
- **Data**: LocalStorage / Text-based settings (`.txt`)
- **Version Control**: Git / GitHub

---

## 폴더 구조 (Project Structure)
```text
root/
├─ index.html          # 메인 진입점
├─ style.css           # 유튜브 테마 스타일
├─ src/
│  ├─ main.js          # 초기화 및 실행
│  ├─ core/            # 엔진 및 시스템 관리
│  ├─ entities/        # 플레이어 및 보스 객체
│  ├─ patterns/        # 전투 패턴 로직
│  └─ ui/              # UI 및 광고 시스템
└─ assets/             # 이미지 및 사운드 리소스
```

---

## Git Branch Strategy (Personal Branch)

본 프로젝트는 빠르고 효율적인 개발을 위해 **개인 브런치(Personal Branch)** 전략을 사용합니다. 각 팀원은 본인 이름으로 된 브런치에서 작업한 후, `develop` 브런치로 Pull Request(PR)를 진행합니다.

- **`main`**: 최종 배포 브런치
- **`develop`**: 코드 통합 브런치
- **`user/박재영`**: 클라이언트 / 게임 로직 전용 작업 공간
- **`user/한지연`**: 보스 패턴 / AI 전용 작업 공간
- **`user/강서현`**: UI / 시스템 전용 작업 공간