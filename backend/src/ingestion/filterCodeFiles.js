const CODE_EXTENSIONS = [
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".py",
  ".java",
  ".go",
  ".cpp",
  ".cs"
];

export function filterCodeFiles(files) {
  return files.filter((file) =>
    CODE_EXTENSIONS.some((ext) => file.endsWith(ext))
  );
}