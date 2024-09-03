

interface TreeNode {
  name: string;
  url: string;
  childrens?: TreeNode[];
}

export const useFindParent = <T extends TreeNode>(
  array: T[],
  targetUrl: string
): Array<{ name: string; url: string }> | null => {
  if (targetUrl === "/") return null;

  const stack = array.map((item) => ({
    node: item,
    path: [{ name: "Главная", url: "/" }],
  }));

  while (stack.length > 0) {
    const current = stack.pop();

    if (!current) continue;

    const { node, path } = current;
    const currentPath = [...path, { name: node.name, url: node.url }];

    if (node.url === targetUrl) {
      return currentPath;
    }

    if (node.childrens) {
      for (let child of node.childrens) {
        stack.push({ node: child as T, path: currentPath });
      }
    }
  }

  return null;
};