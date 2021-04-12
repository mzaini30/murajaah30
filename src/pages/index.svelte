<script>
	document.title = 'Murajaah'
	let data = []
	function ambilData(){
		if (localStorage.murajaah) {
			data = JSON.parse(localStorage.murajaah)
		}
	}
	ambilData()
	function simpan(){
		localStorage.setItem('murajaah', JSON.stringify(data))
	}
	function hapus(x){
		data = data.filter(nilai => nilai != x)
		simpan()
	}
	function tambah(x){
		data = [...data, x]
		simpan()
	}
</script>

<div class="h-1 bg-green-300 sticky top-0" style="width: {data.length * 100 / 120}%"></div>
<div class="py-7 w-[90%] md:w-[40%] mx-auto">
	<h1 class="text-center text-3xl pb-2">Murajaah</h1>
	{#each Array(30) as item, index}
		<p class="font-bold text-center pt-5 pb-3 text-gray-700">Juz {index + 1}</p>
		<div class="flex gap-[3%]">
			{#each Array(4) as item2, index2}
				{#if data.includes(`${index + 1}-${index2 + 1}`)}
					<a href="/" class="bg-green-200 w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw] flex justify-center place-items-center rounded-[50%]" on:click|preventDefault={() => hapus(`${index + 1}-${index2 + 1}`)}>
						<span class="">&nbsp;</span>
						{index2 + 1}
						<span class="">&nbsp;</span>
					</a>
				{:else}
					<a href="/" class="bg-gray-200 w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw] flex justify-center place-items-center rounded-[50%]" on:click|preventDefault={() => tambah(`${index + 1}-${index2 + 1}`)}>
						<span class="">&nbsp;</span>
						{index2 + 1}
						<span class="">&nbsp;</span>
					</a>
				{/if}
			{/each}
		</div>
	{/each}
</div>