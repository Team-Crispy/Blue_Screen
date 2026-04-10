export default class Player {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = 40;
        this.height = 40;
        this.x = canvasWidth / 2 - this.width / 2;
        this.y = canvasHeight - 100;

        this.speed = 5;
        this.dashDistance = 15; // 회피 시 순간 이동 거리
        this.isDashing = false;
        this.dashCooldown = false;

        this.hp = 100;
        this.keys = {}; // 키 입력 상태 저장

        // 키 이벤트 리스너 등록
        window.addEventListener('keydown', (e) => this.keys[e.key] = true);
        window.addEventListener('keyup', (e) => this.keys[e.key] = false);

        // 회피 키 이벤트 리스너 등록 ( 기본 SHift키 인데 나중에 바꿀까? )
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Shift') this.dash();
        }); // addEventListener()
    } // constructor()

    dash() {
        if (this.dashCooldown) return;
        this.isDashing = true;
        this.dashCooldown = true;

        // 이동 방향으로 순간이동 (간단한 버전)
        if (this.keys['ArrowUp']) this.y -= this.dashDistance * 5;
        if (this.keys['ArrowDown']) this.y += this.dashDistance * 5;
        if (this.keys['ArrowLeft']) this.x -= this.dashDistance * 5;
        if (this.keys['ArrowRight']) this.x += this.dashDistance * 5;

        setTimeout(() => this.isDashing = false, 100); // 대쉬 시 0.1초간 무적
        setTimeout(() => this.dashCooldown = false, 500); // 회피 쿨타임 0.5초
    } // dash()

    update() {
        // 이동 로직
        if (this.keys['ArrowUp'] && this.y > 0) this.y -= this.speed;
        if (this.keys['ArrowDown'] && this.y < this.canvasHeight - this.height) this.y += this.speed;
        if (this.keys['ArrowLeft'] && this.x > 0) this.x -= this.speed;
        if (this.keys['ArrowRight'] && this.x < this.canvasWidth - this.width) this.x += this.speed;
    } // update()

    draw(ctx) {
        // 회피 중일 때는 반투명하게 연출
        ctx.fillStyle = this.isDashing ? 'rgba(0, 150, 255, 0.5)' : '#0096FF';
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // 회피 쿨타임 표시 (심플 UI)
        if (this.dashCooldown && !this.isDashing) {
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        } // if()
    } // draw()

    getBounds() {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
    } // getBounds()
} // Player