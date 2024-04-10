import configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${configuration.apiToken}`,
    },
  };

  const response = await fetch(
    `${configuration.apiUrl}/3${relativeUrl}`,
    options
  );
  const json: TBody = await response.json();
  return json;
}

interface PageResponse<TResult> {
  page: number;
  results: TResult[];
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  backdrop_path?: string | null;
}

interface Configuration {
  images: {
    base_url: string;
  };
}

export const client = {
  async getConfiguration() {
    return get<Configuration>("/configuration");
  },
  async getNowPlaying(): Promise<MovieDetails[]> {
    const response = await get<PageResponse<MovieDetails>>(
      "/movie/now_playing?language=en-US&page=1"
    );
    return response.results;
  },
};
