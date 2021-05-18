<script>
const restPropsClass = String($$restProps?.class ?? '').split(' ')
$$restProps.class = [
	...new Set(['_atom_frm__label', ...restPropsClass])
].join(' ')
</script>

<label
	class:_atom_frm__label___disabled={$$restProps?.disabled ?? false}
	class:_atom_frm__label___required={$$restProps?.required ?? false}
	{...$$restProps}
><slot /></label>
