import { routeList } from "@/libs/pagesPosts/config";
import { useRouter } from "next/router";
import { useEffect } from "react";

const routeMap = routeList.reduce((acc, cur) => {
  acc.set(cur.old, cur.new);
  return acc;
}, new Map<string, string>());

export default function Post({ postId }: { postId: string }) {
  const router = useRouter();
  const newPath = routeMap.get(postId);
  useEffect(() => {
    if (!newPath) {
      return;
    }
    router.replace(window.location.origin + newPath);
  });
  return newPath ? null : <div>Not Found</div>;
}

export function getStaticProps({ params }: { params: { postId: string } }) {
  return {
    props: { postId: params.postId },
  };
}

export function getStaticPaths() {
  return {
    paths: routeList.map(r => {
      return {
        params: {
          postId: r.old,
        },
      };
    }),
    fallback: false,
  };
}
