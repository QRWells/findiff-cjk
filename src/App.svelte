<script lang="ts">
  let matrix: string[][] = [[]];
  let x: number = 0;
  let y: number = 0;
  let major: string = "sc";
  let minor: string = "jp";

  let kanjis: string[] = ["骨", "直", "今"];

  function Refresh() {
    matrix = generate(8);
  }

  function generate(size: number): string[][] {
    // randomly select a kanji
    let kanji: string = kanjis[Math.floor(Math.random() * kanjis.length)];
    // randomly select major class
    major = Math.random() < 0.5 ? "sc" : "jp";
    minor = major === "sc" ? "jp" : "sc";
    // randomly select a position
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size); 

    const result: string[][] = [];
    for (let i = 0; i < size; i++) {
      const row: string[] = [];
      for (let j = 0; j < size; j++) {
        row.push(kanji);
      }
      result.push(row);
    }
    return result;
  }

  function rightAnswer(): void {
    alert("Correct!");
  }

  function wrongAnswer(): void {
    alert("Wrong!");
  }
</script>

<main>
  <button on:click={Refresh}> Refresh </button>
  <div>
    {#each matrix as row, i}
      <div>
        {#each row as cell, j}
          {#if i === x && j === y}
            <button class={major} on:click={rightAnswer}>{cell}</button>
          {:else}
            <button class={minor} on:click={wrongAnswer}>{cell}</button>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Noto+Serif+SC&display=swap");
  main {
    display: flex;
    flex-direction: column;
  }
  .sc {
    font-family: "Noto Serif SC", serif;
    font-size: large;
  }
  .jp {
    font-family: "Noto Serif JP", serif;
    font-size: large;
  }
</style>
