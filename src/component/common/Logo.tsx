import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href='/'>
			<Image
				src='/assets/logo-light.svg'
				alt='Kanban'
				width={152}
				height={24}
			/>
		</Link>
	);
};
export default Logo;
