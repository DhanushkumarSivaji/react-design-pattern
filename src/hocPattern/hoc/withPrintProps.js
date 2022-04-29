export const withPrintProps = Component => {
	return (props) => {
		console.log(props);

		return <Component {...props} />
	}
}
