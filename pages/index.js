import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import redirect from "./redirects";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Self Learn</title>
				<meta
					name="description"
					content="This page is for learning various such as JAVA, ORACLE, HTML, CSS, JAVASCRIPT and Other..."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to Self Learn!</h1>

				<p className={styles.description}>
					Get started by clicking one of the Course below{" "}
				</p>

				<div className={styles.grid}>
					<a href="#" className={styles.card}>
						<h2>Core Java &rarr;</h2>
						<p>
							Find in-depth information about Core java and its
							features.
						</p>
					</a>

					<a href="#" className={styles.card}>
						<h2>Oracle &rarr;</h2>
						<p>
							Learn about Oracle in this course from basics to
							advanced level.
						</p>
					</a>

					<a href="#" className={styles.card}>
						<h2>UI Technologies &rarr;</h2>
						<p>
							Discover and Learn to Design HTML Pages with good UI
							and functionality.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}>
						<h2>Deploy Site &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL
							with Vercel.
						</p>
					</a>
				</div>
			</main>
		</div>
	);
}
