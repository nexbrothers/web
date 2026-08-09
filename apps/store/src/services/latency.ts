// Simulated network layer. Swap this module out first when a real backend arrives —
// every service function below awaits `delay()` the same way it would await `fetch()`.

let simulateFailures = false;

export function setSimulateFailures(value: boolean) {
  simulateFailures = value;
}

export function getSimulateFailures() {
  return simulateFailures;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function shouldFail(chance = 1): boolean {
  if (!simulateFailures) return false;
  return Math.random() < chance;
}
