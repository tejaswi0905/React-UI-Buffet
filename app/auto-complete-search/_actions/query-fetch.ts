import * as z from "zod";

const MovieTitleSchema = z.object({
  title: z.string(),
});

export const searchMovie = (title: z.infer<typeof MovieTitleSchema>) => {
  const validatedFields = MovieTitleSchema.safeParse(title);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const movieTitle = validatedFields.data.title;

  try {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=7a25e2297850f818bae44d3f3efd8311`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.total_results);
      });
  } catch (e: any) {
    console.log(e);
  } finally {
    return { success: "Search success" };
  }
};
