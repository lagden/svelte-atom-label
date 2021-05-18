<script>
	// Props class
	let className = ''
	export {className as class}
</script>

<label
	class="_atom_frm__label {className}"
	class:_atom_frm__label___disabled={$$restProps.disabled}
	class:_atom_frm__label___required={$$restProps.required}
	{...$$restProps}
><slot /></label>
