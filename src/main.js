import Player from './entities/Player.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = new Player(canvas.width, canvas.height);

function gameLoop() {
    // 1. 화면 지우기 ( 유튜브 플레이어 배경색 느낌 )
    ctx.fillStyle = '#0f0f0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. 업데이트 ( 플레이어 위치 계산 )
    player.update();

    // 3. 그리기 ( 화면 출력 )
    player.draw( ctx );

    // 4. 반복 실행
    requestAnimationFrame( gameLoop );
} // gameLoop()

// 게임 시작!
gameLoop();