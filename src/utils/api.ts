const GITHUB_API = "https://api.github.com";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
}

export async function fetchGitHubRepos(
  username: string,
): Promise<GitHubRepo[]> {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=10`,
    { headers },
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos: GitHubRepo[] = await response.json();
  return repos.filter((repo) => !repo.fork);
}

export async function fetchGitHubStars(username: string): Promise<number> {
  const repos = await fetchGitHubRepos(username);
  return repos.reduce((total, repo) => total + repo.stargazers_count, 0);
}
