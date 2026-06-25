'use client';

import { useEffect } from 'react';
import { useUserStore } from '../store/UserStore';
import { baseApi } from '../lib/baseApi';

export default function Page() {
	const accessToken = useUserStore((state) => state.accessToken);

	const getEmployees = () => {
		//사원 조회하는데 엑세스토큰을 안찾는 이유는 베이스api 코드안에 엑세스토큰을 증명하는 코드가 들어있음
		baseApi.get('/employees');
	};

	useEffect(() => {
		console.log('accessToken >>>', accessToken);
	}, [accessToken]);

	useEffect(() => {
		getEmployees();
	});
	return (
		<div>
			<div className="rounded-lg border bg-white p-6">
				<h1 className="mb-4 text-2xl font-bold">마이페이지</h1>

				<div className="space-y-2 text-sm">
					<p>이름 : 홍길동</p>
					<p>이메일 : hong@test.com</p>
					<p>권한 : USER</p>
				</div>
			</div>
		</div>
	);
}
