<script lang="ts">
  let size: number = 8;
  let x: number = 0;
  let y: number = 0;
  let major: string = "sc";
  let minor: string = "jp";
  let kanjis: string[] = [
    "骨",
    "直",
    "今",
    "具",
    "刃",
    "化",
    "外",
    "真",
    "蔥",
    "画",
  ];
  let current: number = 0;

  function next() {
    generate();
  }

  function generate() {
    // randomly select a kanji
    let next_ = Math.floor(Math.random() * kanjis.length);
    while (next_ === current) {
      next_ = Math.floor(Math.random() * kanjis.length);
    }
    current = next_;
    // randomly select major class
    major = Math.random() < 0.5 ? "sc" : "jp";
    minor = major === "sc" ? "jp" : "sc";
    // randomly select a position
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
  }

  function rightAnswer(): void {
    alert("Correct!");
    next();
  }

  function wrongAnswer(): void {
    alert("Wrong!");
  }
</script>

<main class="flex flex-col">
  <div class="matrix">
    {#each Array(size) as _, i}
      <div>
        {#each Array(size) as _, j}
          {#if i === x && j === y}
            <button class="{major} m-1" on:click={rightAnswer}
              >{kanjis[current]}</button
            >
          {:else}
            <button class="{minor} m-1" on:click={wrongAnswer}
              >{kanjis[current]}</button
            >
          {/if}
        {/each}
      </div>
    {/each}
  </div>
  <div class="flex flex-row justify-stretch space-x-4">
    <input type="number" bind:value={size} min="2" max="12" on:change={next} />
    <button class="grow" on:click={next}> Next </button>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Noto+Serif+SC&display=swap");
  .matrix button {
    border-radius: 0%;
    padding: 0;
    width: 2em;
    height: 2em;
    font-size: 24pt;
  }
  .sc {
    font-family: "Noto Serif SC", serif;
  }
  .jp {
    font-family: "Noto Serif JP", serif;
  }
</style>
