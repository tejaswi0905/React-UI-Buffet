import * as z from "zod";

export const InputSchema = z.object({
  title: z
    .string()
    .regex(
      /^[a-zA-Z0-9\s]+$/,
      "Input can only contain letters, numbers, and spaces"
    ),
});

export const searchMovie = async (title: z.infer<typeof InputSchema>) => {
  const validatedFields = InputSchema.safeParse(title);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const movieTitle = validatedFields.data.title;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=7a25e2297850f818bae44d3f3efd8311`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e: any) {
    console.log(e);
    return { error: "Error in fetching data." };
  }
};
