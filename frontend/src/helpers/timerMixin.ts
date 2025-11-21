export default function useTimerMixin() {
	function timer(callback: (show: boolean) => void, ms: number): void {
		callback(true)
		setTimeout(() => {
			callback(false)
		}, ms)
	}

	return { timer }
}
