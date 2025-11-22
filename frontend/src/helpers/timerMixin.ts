function timer(callback: (show: boolean) => void, ms: number): void {
	callback(true)
	setTimeout(() => {
		callback(false)
	}, ms)
}

export default function useTimerMixin() {
	return { timer }
}
