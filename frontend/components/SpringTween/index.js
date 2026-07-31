"use client";

export default class SpringTween {
  constructor({ mass = 1, stiffness = 120, damping = 16, initial = 0, target = 1 }) {
    this.mass = mass;
    this.stiffness = stiffness;
    this.damping = damping;
    this.position = initial;
    this.velocity = 0;
    this.target = target;
    this.onUpdate = () => {};
    this.onComplete = () => {};
    this.running = false;
  }

  tick() {
    const displacement = this.position - this.target;
    const springForce = -this.stiffness * displacement;
    const dampingForce = -this.damping * this.velocity;
    const acceleration = (springForce + dampingForce) / this.mass;

    this.velocity += acceleration * (1 / 60);
    this.position += this.velocity * (1 / 60);
    this.onUpdate(this.position);

    if (Math.abs(this.velocity) < 0.001 && Math.abs(displacement) < 0.001) {
      this.position = this.target;
      this.running = false;
      this.onUpdate(this.position);
      this.onComplete();
    }
  }

  start() {
    if (this.running) return;
    this.running = true;
    const frame = () => {
      if (!this.running) return;
      this.tick();
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  stop() {
    this.running = false;
  }
}
