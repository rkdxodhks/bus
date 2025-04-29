// 왕편 (밀양 → 부산대 밀양캠퍼스) 시간표 데이터
const wangpyeonData = [
  { 연번: 1, 영남루: "6:14", 밀양역: "6:45", 부산대: "6:57" },
  { 연번: 2, 영남루: "", 밀양역: "7:00", 부산대: "7:12" },
  { 연번: 3, 영남루: "6:19", 밀양역: "7:20", 부산대: "7:32" },
  { 연번: 4, 영남루: "8:10", 밀양역: "8:20", 부산대: "8:32" },
  { 연번: 5, 영남루: "8:33", 밀양역: "8:45", 부산대: "8:53" },
  { 연번: 6, 영남루: "8:45", 밀양역: "8:56", 부산대: "9:04" },
  { 연번: 7, 영남루: "9:25", 밀양역: "9:35", 부산대: "9:43" },
  { 연번: 8, 영남루: "9:41", 밀양역: "9:48", 부산대: "9:56" },
  { 연번: 9, 영남루: "9:53", 밀양역: "10:05", 부산대: "10:13" },
  { 연번: 10, 영남루: "10:15", 밀양역: "10:22", 부산대: "10:32" },
  { 연번: 11, 영남루: "", 밀양역: "11:26", 부산대: "11:38" },
  { 연번: 12, 영남루: "11:33", 밀양역: "11:48", 부산대: "11:56" },
  { 연번: 13, 영남루: "", 밀양역: "12:36", 부산대: "12:48" },
  { 연번: 14, 영남루: "12:41", 밀양역: "12:50", 부산대: "13:00" },
  { 연번: 15, 영남루: "13:37", 밀양역: "13:50", 부산대: "14:02" },
  { 연번: 16, 영남루: "14:05", 밀양역: "14:14", 부산대: "14:27" },
  { 연번: 17, 영남루: "", 밀양역: "14:36", 부산대: "14:48" },
  { 연번: 18, 영남루: "14:33", 밀양역: "14:45", 부산대: "14:57" },
  { 연번: 19, 영남루: "15:29", 밀양역: "15:40", 부산대: "15:52" },
  { 연번: 20, 영남루: "15:53", 밀양역: "16:05", 부산대: "16:17" },
  { 연번: 21, 영남루: "16:33", 밀양역: "16:42", 부산대: "16:54" },
  { 연번: 22, 영남루: "17:15", 밀양역: "17:23", 부산대: "17:35" },
  { 연번: 23, 영남루: "17:29", 밀양역: "17:44", 부산대: "17:56" },
  { 연번: 24, 영남루: "17:30", 밀양역: "17:45", 부산대: "17:57" }, // 스크립트 데이터 사용 (이미지 원본과 다를 수 있음)
  { 연번: 25, 영남루: "17:57", 밀양역: "18:10", 부산대: "18:22" },
  { 연번: 26, 영남루: "18:37", 밀양역: "18:45", 부산대: "18:57" },
  { 연번: 27, 영남루: "19:17", 밀양역: "19:30", 부산대: "19:42" },
  { 연번: 28, 영남루: "19:35", 밀양역: "19:44", 부산대: "19:56" },
  { 연번: 29, 영남루: "20:01", 밀양역: "20:08", 부산대: "20:20" },
  { 연번: 30, 영남루: "20:35", 밀양역: "20:42", 부산대: "20:52" },
  { 연번: 31, 영남루: "20:53", 밀양역: "21:05", 부산대: "21:17" },
  { 연번: 32, 영남루: "21:50", 밀양역: "21:57", 부산대: "22:09" },
  { 연번: 33, 영남루: "22:13", 밀양역: "22:22", 부산대: "22:34" },
  { 연번: 34, 영남루: "22:53", 밀양역: "23:00", 부산대: "23:12" },
];

// 복편 (부산대 밀양캠퍼스 → 밀양) 시간표 데이터
const bokpyeonData = [
  { 연번: 1, 부산대: "7:02", 밀양역발: "7:18", 영남루: "7:25" },
  { 연번: 2, 부산대: "7:20", 밀양역발: "7:32", 영남루: "7:39" },
  { 연번: 3, 부산대: "7:37", 밀양역발: "7:56", 영남루: "8:03" },
  { 연번: 4, 부산대: "8:40", 밀양역발: "8:52", 영남루: "8:59" },
  { 연번: 5, 부산대: "9:12", 밀양역발: "9:19", 영남루: "" },
  { 연번: 6, 부산대: "9:20", 밀양역발: "9:27", 영남루: "" },
  { 연번: 7, 부산대: "10:00", 밀양역발: "10:07", 영남루: "" },
  { 연번: 8, 부산대: "10:12", 밀양역발: "10:19", 영남루: "" },
  { 연번: 9, 부산대: "10:16", 밀양역발: "10:30", 영남루: "" },
  { 연번: 10, 부산대: "10:38", 밀양역발: "10:52", 영남루: "10:59" },
  { 연번: 11, 부산대: "12:18", 밀양역발: "12:32", 영남루: "12:39" },
  { 연번: 12, 부산대: "12:16", 밀양역발: "12:23", 영남루: "" },
  { 연번: 13, 부산대: "13:28", 밀양역발: "13:44", 영남루: "13:51" },
  { 연번: 14, 부산대: "13:16", 밀양역발: "13:23", 영남루: "" },
  { 연번: 15, 부산대: "14:16", 밀양역발: "14:23", 영남루: "" },
  { 연번: 16, 부산대: "14:40", 밀양역발: "14:47", 영남루: "" },
  { 연번: 17, 부산대: "15:28", 밀양역발: "15:44", 영남루: "15:51" },
  { 연번: 18, 부산대: "15:16", 밀양역발: "15:23", 영남루: "" },
  { 연번: 19, 부산대: "16:00", 밀양역발: "16:07", 영남루: "" },
  { 연번: 20, 부산대: "16:19", 밀양역발: "16:28", 영남루: "" },
  { 연번: 21, 부산대: "17:02", 밀양역발: "17:16", 영남루: "17:23" },
  { 연번: 22, 부산대: "17:42", 밀양역발: "17:56", 영남루: "18:03" },
  { 연번: 23, 부산대: "18:08", 밀양역발: "18:15", 영남루: "" },
  { 연번: 24, 부산대: "18:42", 밀양역발: "19:00", 영남루: "19:07" },
  { 연번: 25, 부산대: "18:32", 밀양역발: "18:39", 영남루: "" },
  { 연번: 26, 부산대: "19:08", 밀양역발: "19:24", 영남루: "19:31" },
  { 연번: 27, 부산대: "19:50", 밀양역발: "19:57", 영남루: "" },
  { 연번: 28, 부산대: "20:04", 밀양역발: "20:18", 영남루: "20:25" },
  { 연번: 29, 부산대: "20:30", 밀양역발: "20:37", 영남루: "" },
  { 연번: 30, 부산대: "21:07", 밀양역발: "21:14", 영남루: "" },
  { 연번: 31, 부산대: "21:18", 밀양역발: "21:28", 영남루: "" },
  { 연번: 32, 부산대: "22:24", 밀양역발: "22:31", 영남루: "" },
  { 연번: 33, 부산대: "22:44", 밀양역발: "23:00", 영남루: "23:07" },
  { 연번: 34, 부산대: "23:12", 밀양역발: "23:20", 영남루: "23:27" },
];

// DOM 요소 전역 변수 선언 (할당은 initializePage에서)
let wangpyeonBtn;
let bokpyeonBtn;
let statusDiv;
let wangpyeonTimetableDiv;
let bokpyeonTimetableDiv;
let weekdayMessageDiv;

let currentRoute = "wang"; // 'wang' 또는 'bok'
let updateTimer = null; // 상태 업데이트 타이머

// 시간을 분 단위로 변환하는 함수 (예: '6:14' -> 374)
function timeToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== "string" || !timeStr.includes(":")) {
    return -1; // 유효하지 않은 시간 문자열 처리
  }
  const [hours, minutes] = timeStr.split(":").map(Number);
  // 예외처리: NaN 값이 나올 경우 (숫자로 변환 불가능)
  if (isNaN(hours) || isNaN(minutes)) {
    console.warn(`Invalid time format: ${timeStr}`); // 콘솔 경고
    return -1;
  }
  return hours * 60 + minutes;
}

// 다음 버스 정보를 찾는 함수
// 기준 정류장의 시간이 있는 경우만 대상으로 찾음
function findNextBus(data, stopColumnKey) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let nextBus = null;
  let minMinutesUntil = Infinity;

  for (const row of data) {
    const busTimeStr = row[stopColumnKey];
    // 기준 정류장 시간이 없는 경우 이 행은 건너뜀
    if (!busTimeStr || busTimeStr.trim() === "") continue;

    const busMinutes = timeToMinutes(busTimeStr);
    // 시간 변환이 유효하지 않은 경우 건너뜀
    if (busMinutes === -1) continue;

    // 현재 시간 이후의 버스 찾기
    if (busMinutes >= currentMinutes) {
      const minutesUntil = busMinutes - currentMinutes;
      if (minutesUntil < minMinutesUntil) {
        minMinutesUntil = minutesUntil;
        // 다음 버스로 사용될 데이터 객체를 통째로 저장
        nextBus = {
          time: busTimeStr,
          minutesUntil: minutesUntil,
          rowData: row,
        };
      }
      // 정확히 현재 시각에 일치하거나 지났으면 (아주 조금 차이나는 경우 포함) 그 버스를 대상으로 잡고 탐색 종료
      if (minutesUntil >= 0 && minutesUntil < 1) {
        // 예: 현재 14:30, 버스 14:30
        nextBus = {
          time: busTimeStr,
          minutesUntil: minutesUntil,
          rowData: row,
        };
        break;
      }
    }
  }

  // 만약 오늘 남은 버스가 없다면 (currentMinutes가 마지막 버스 시간보다 큰 경우)
  // null을 반환
  if (!nextBus) {
    return null;
  }

  // 가장 가까운 시간이지만 이미 시간이 지났다면 (예: 현재 14:31, 다음 버스 14:30)
  // 엄밀히 말해 이미 떠난 버스일 수 있지만, '몇 분 후'가 음수로 나오는 경우는 고려하지 않음.
  // >= currentMinutes 조건으로 이미 과거 버스는 배제했으므로, 남은 버스 중 가장 빠른 것을 반환.

  return nextBus;
}

// 시간표 테이블에서 특정 연번을 가진 행을 찾는 함수
function findTableRowByRowData(rowData, tableSelector) {
  const tbody = document.querySelector(`${tableSelector} tbody`);
  if (!tbody) return null;

  const rows = tbody.querySelectorAll("tr");
  for (const row of rows) {
    // 셀에 data-label="연번" 속성이 있는 첫 번째 셀 또는 첫 번째 셀을 찾음
    const 연번Cell = row.querySelector('td[data-label="연번"]') || row.cells[0];
    if (연번Cell && parseInt(연번Cell.textContent) === rowData.연번) {
      return row;
    }
  }
  return null;
}

// 상태창 업데이트 함수
function updateStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;

  let nextBusInfo = null;
  let startStopName = ""; // 상태창에 표시될 기준 정류장 이름
  let currentTableSelector = ""; // 하이라이트에 사용될 테이블 셀렉터

  // 기존 하이라이트 제거 (현재 활성화된 테이블에서만)
  // 활성화된 테이블 컨테이너 아래의 모든 tr에서 .next-bus 클래스 제거
  document
    .querySelectorAll(".timetable-container.active table tbody tr")
    .forEach((row) => {
      row.classList.remove("next-bus");
    });

  if (currentRoute === "wang") {
    // 왕편: 영남루 출발 시간 기준으로 다음 버스 찾기 시도
    nextBusInfo = findNextBus(wangpyeonData, "영남루");
    startStopName = "영남루";
    currentTableSelector = ".wangpyeon-table";

    // 영남루 출발 시간이 없는 경우, 밀양역 출발 시간 기준으로 다음 버스 찾기 시도
    if (!nextBusInfo) {
      nextBusInfo = findNextBus(wangpyeonData, "밀양역");
      startStopName = "밀양역"; // 밀양역 기준임을 명시
      // 밀양역 시간도 없을 경우 (데이터에 없는 경우 등), 표시할 정보 없음
      if (!nextBusInfo) startStopName = "해당경로 기점"; // 상태창 표시를 위해 기점이라고 추정하여 표시
    }
  } else {
    // currentRoute === 'bok' (복편: 부산대 밀양캠퍼스 → 밀양)
    // 복편: 부산대 출발 시간 기준으로 다음 버스 찾기 시도
    nextBusInfo = findNextBus(bokpyeonData, "부산대");
    startStopName = "부산대 밀양캠퍼스"; // 부산대 기준으로 찾았음을 명시
    currentTableSelector = ".bokpyeon-table";
  }

  // 상태창 업데이트 내용 결정
  if (nextBusInfo && nextBusInfo.time) {
    // nextBusInfo가 null이 아니고, 유효한 시간이 있을 때만 정보 표시
    let timeIndicatorClass = "later"; // 기본값 (16분 이상 남음)
    if (nextBusInfo.minutesUntil <= 5) {
      timeIndicatorClass = "soon"; // 5분 이내
    } else if (nextBusInfo.minutesUntil <= 15) {
      timeIndicatorClass = "upcoming"; // 6분 ~ 15분
    }

    const arrivalStatus =
      nextBusInfo.minutesUntil <= 0
        ? "곧 출발" // 시간이 0분 이하로 남았거나, 딱 시간이 됐을 때
        : `${nextBusInfo.minutesUntil}분 후 출발`;

    statusDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 8px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                현재 시각: ${currentTime}
            </div>
            <div>
                <span style="font-weight: bold;">${startStopName}</span> 기준 다음 버스: ${nextBusInfo.time}
                <span class="time-indicator ${timeIndicatorClass}">${arrivalStatus}</span>
            </div>
        `;

    // 다음 버스 행 하이라이트
    // nextBusInfo.rowData는 findNextBus에서 찾은 데이터 행 객체
    const nextBusTableRow = findTableRowByRowData(
      nextBusInfo.rowData,
      currentTableSelector
    );
    if (nextBusTableRow) {
      nextBusTableRow.classList.add("next-bus");
      // 필요하다면 모바일 스크롤 로직 여기에 추가
      // if (window.innerWidth <= 768) {
      //     nextBusTableRow.scrollIntoView({ behavior: "smooth", block: "center" });
      // }
    }
  } else {
    // 오늘 남은 버스가 없는 경우
    statusDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 8px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                현재 시각: ${currentTime}
            </div>
            <div><span style="font-weight: bold;">${startStopName}</span> 기준 오늘은 더 이상 버스 운행이 없습니다.</div>
        `;
  }
}

// 시간표 테이블을 동적으로 채우는 함수
function populateTable(data, tableSelector, columns) {
  const tbody = document.querySelector(`${tableSelector} tbody`);
  if (!tbody) return; // tbody가 없는 경우 종료

  tbody.innerHTML = ""; // 기존 내용 비우기

  data.forEach((rowData) => {
    const row = document.createElement("tr");

    columns.forEach((colKey) => {
      const cell = document.createElement("td");
      // data-label 속성에 컬럼 키 사용
      cell.setAttribute("data-label", colKey); // 예: "영남루", "밀양역발"
      cell.textContent = rowData[colKey] !== undefined ? rowData[colKey] : "";
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

// 시간표 표시 업데이트 (왕편/복편 전환)
function updateTimetableDisplay(route) {
  currentRoute = route;

  // 모든 활성 클래스 제거
  wangpyeonTimetableDiv.classList.remove("active");
  bokpyeonTimetableDiv.classList.remove("active");
  wangpyeonBtn.classList.remove("active");
  bokpyeonBtn.classList.remove("active");

  // 모든 테이블의 하이라이트 제거 (혹시 모를 이전 상태 제거)
  document
    .querySelectorAll(".timetable-container table tbody tr")
    .forEach((row) => {
      row.classList.remove("next-bus");
    });

  // 선택된 경로에 따라 활성 클래스 추가 및 테이블 채우기
  if (route === "wang") {
    wangpyeonTimetableDiv.classList.add("active");
    wangpyeonBtn.classList.add("active");
    // 왕편 시간표 채우기 - 표시할 컬럼 키 지정
    populateTable(wangpyeonData, ".wangpyeon-table", [
      "연번",
      "영남루",
      "밀양역",
      "부산대",
    ]);
  } else {
    // route === 'bok'
    bokpyeonTimetableDiv.classList.add("active");
    bokpyeonBtn.classList.add("active");
    // 복편 시간표 채우기 - 표시할 컬럼 키 지정
    populateTable(bokpyeonData, ".bokpyeon-table", [
      "연번",
      "부산대",
      "밀양역발",
      "영남루",
    ]);
  }

  // 경로가 변경되었으므로 상태 업데이트
  updateStatus();
}

// 요일을 확인하고 페이지를 설정하는 함수
function checkWeekdayAndSetup() {
  const today = new Date().getDay(); // 일요일=0, 월요일=1, ..., 토요일=6

  if (today >= 1 && today <= 5) {
    // 월요일(1)부터 금요일(5)까지
    // 평일이면 시간표 표시 관련 요소 보이게 처리
    if (document.getElementById("controls"))
      document.getElementById("controls").style.display = "flex"; // flex로 변경 (CSS 반영)
    if (statusDiv) statusDiv.style.display = "flex"; // flex로 변경 (CSS 반영)
    if (weekdayMessageDiv) weekdayMessageDiv.style.display = "none";

    // 초기 시간표 표시 (기본은 왕편)
    // initializePage에서 이미 DOM 요소들을 전역 변수에 할당한 상태
    if (wangpyeonBtn && bokpyeonBtn) {
      // 버튼 요소가 있는지 최종 확인
      updateTimetableDisplay("wang"); // 기본 왕편 표시 및 상태 업데이트 호출

      // 상태창 30초마다 업데이트
      // 이전 타이머가 있으면 클리어
      if (updateTimer) clearInterval(updateTimer);
      updateTimer = setInterval(updateStatus, 30000); // 30000 밀리초 = 30초
    } else {
      console.error("Essential buttons not found.");
      if (weekdayMessageDiv)
        weekdayMessageDiv.textContent =
          "시간표 표시를 위한 필수 요소를 찾을 수 없습니다. 관리자에게 문의하세요.";
      if (weekdayMessageDiv) weekdayMessageDiv.style.display = "block";
    }
  } else {
    // 주말인 경우 시간표 관련 요소 숨김, 메시지 표시
    if (updateTimer) clearInterval(updateTimer); // 주말이면 타이머 중지
    if (document.getElementById("controls"))
      document.getElementById("controls").style.display = "none";
    if (wangpyeonTimetableDiv) wangpyeonTimetableDiv.style.display = "none";
    if (bokpyeonTimetableDiv) bokpyeonTimetableDiv.style.display = "none";
    if (statusDiv) statusDiv.style.display = "none"; // 상태창도 숨김
    if (weekdayMessageDiv) weekdayMessageDiv.style.display = "flex"; // flex로 변경 (CSS 반영)
  }
}

// 다크 모드 감지 및 적용 기능
function checkDarkMode() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// 데이터 정렬 함수 (불변성을 유지하도록 수정)
function sortTimeData(data, sortKey1, sortKey2 = null) {
  // 데이터를 복사하여 원본 배열 수정 방지
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    let aTime = timeToMinutes(a[sortKey1]);
    let bTime = timeToMinutes(b[sortKey1]);

    // 첫 번째 키의 시간이 같거나 유효하지 않은 경우 두 번째 키로 비교
    if (sortKey2 && (aTime === -1 || bTime === -1 || aTime === bTime)) {
      aTime = timeToMinutes(a[sortKey2]);
      bTime = timeToMinutes(b[sortKey2]);
    }

    // 유효하지 않은 시간(-1)은 비교에서 맨 끝으로 보내거나 유지
    if (aTime === -1 && bTime === -1) return 0; // 둘 다 유효하지 않으면 순서 유지
    if (aTime === -1) return 1; // a만 유효하지 않으면 b가 먼저
    if (bTime === -1) return -1; // b만 유효하지 않으면 a가 먼저

    return aTime - bTime; // 유효한 시간으로 비교
  });

  // 정렬된 순서대로 연번 재할당 (필요시) - 표에만 표시하고 실제 데이터의 연번은 그대로 둘 수도 있음.
  // 여기서는 데이터 자체의 연번을 정렬 후 순서대로 다시 매김.
  sortedData.forEach((item, index) => {
    item.연번 = index + 1;
  });

  // 원본 데이터도 정렬된 순서로 업데이트 (선택적, 여기서는 원본 데이터 순서 유지가 나을 수도 있으나 현재 로직은 정렬 후 사용함)
  // wangpyeonData = sortedData; // 이렇게 직접 할당하면 const라 오류
  // 원본 배열의 내용을 정렬된 순서로 덮어씀
  // 데이터를 정적으로 선언했으므로 정렬 결과를 함수 밖으로 반환해서 사용하거나
  // initializePage에서 이 함수 호출 후 반환된 데이터를 populateTable에 넘겨야 함.
  // 가장 간단한 방법은 초기 선언된 배열 자체를 정렬시키는 것입니다 (const 내부의 내용 변경 가능).
  data.length = 0; // 기존 내용을 지우고
  data.push(...sortedData); // 정렬된 내용을 넣음
}

// 이벤트 리스너를 설정하는 함수
function setupEventListeners() {
  // 버튼 요소들이 이미 initializePage에서 전역 변수에 할당되어 있음을 전제
  if (wangpyeonBtn) {
    wangpyeonBtn.addEventListener("click", function () {
      updateTimetableDisplay("wang");
    });
  } else {
    console.error("Wangpyeon button element not found.");
  }

  if (bokpyeonBtn) {
    bokpyeonBtn.addEventListener("click", function () {
      updateTimetableDisplay("bok");
    });
  } else {
    console.error("Bokpyeon button element not found.");
  }

  // 다크 모드 변경 감지 리스너 추가 (checkDarkMode 함수 존재시)
  if (typeof checkDarkMode === "function") {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", checkDarkMode);
  }
}

// DOM 요소 가져오기 및 전역 변수에 할당하는 함수
function getDOMElements() {
  wangpyeonBtn = document.getElementById("wangpyeon-btn");
  bokpyeonBtn = document.getElementById("bokpyeon-btn");
  statusDiv = document.getElementById("status");
  wangpyeonTimetableDiv = document.getElementById("wangpyeon-timetable");
  bokpyeonTimetableDiv = document.getElementById("bokpyeon-timetable");
  weekdayMessageDiv = document.getElementById("weekday-message");

  // 필수 요소가 누락된 경우 콘솔에 경고
  if (
    !wangpyeonBtn ||
    !bokpyeonBtn ||
    !statusDiv ||
    !wangpyeonTimetableDiv ||
    !bokpyeonTimetableDiv ||
    !weekdayMessageDiv
  ) {
    console.warn("One or more required DOM elements not found.");
    // 필요하다면 사용자에게 오류 메시지를 보여줄 수 있음
  }
}

// 페이지 로드 시 초기화 함수
function initializePage() {
  // 1. DOM 요소 가져와 전역 변수에 할당
  getDOMElements();

  // 필수 DOM 요소가 모두 있는지 확인 (optional, but good practice)
  if (
    !wangpyeonBtn ||
    !bokpyeonBtn ||
    !statusDiv ||
    !wangpyeonTimetableDiv ||
    !bokpyeonTimetableDiv ||
    !weekdayMessageDiv
  ) {
    console.error(
      "Page initialization failed: Required DOM elements are missing."
    );
    // 오류 메시지를 사용자에게 표시하거나 추가 조치를 취할 수 있습니다.
    if (weekdayMessageDiv) {
      weekdayMessageDiv.textContent =
        "시간표 로드 중 오류가 발생했습니다. 필요한 페이지 요소를 찾을 수 없습니다.";
      weekdayMessageDiv.style.display = "block";
    }
    return; // 초기화 실패 시 더 이상 진행하지 않음
  }

  // 2. 데이터 정렬 (연번 재할당 포함)
  sortTimeData(wangpyeonData, "영남루", "밀양역"); // 왕편은 영남루, 없으면 밀양역 기준
  sortTimeData(bokpyeonData, "부산대"); // 복편은 부산대 기준

  // 3. 이벤트 리스너 설정 (전역 변수를 사용)
  setupEventListeners();

  // 4. 요일 확인 및 페이지 UI 설정 (시간표 표시, 버튼 활성화 등)
  checkWeekdayAndSetup(); // 이 함수 안에서 updateTimetableDisplay도 호출됨

  // 5. 다크 모드 확인
  checkDarkMode();

  // (옵션) 브라우저 크기 변경 시 스크롤 조정 등을 위한 이벤트 리스너 추가
  // window.addEventListener('resize', handleResize); // 필요하다면 추가
}

// 페이지 로드 완료 시 초기화 함수 실행
// DOMContentLoaded 이벤트는 HTML 구조가 완전히 로드 및 파싱되었을 때 발생
document.addEventListener("DOMContentLoaded", initializePage);

// 초기 상태 업데이트는 checkWeekdayAndSetup -> updateTimetableDisplay 체인 안에서
// 이미 호출되고, 그 이후로 setInterval에 의해 반복 업데이트 됩니다.
