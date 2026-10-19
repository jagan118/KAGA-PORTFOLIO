import { useState, useRef, useEffect, type CSSProperties, type JSX } from "react";
import {
  splitTypographyProps,
  usePageTypography,
  applyPageCustomization,
  type LandingPageCustomization,
  type PageTypographyProps,
  type PageTypographyRecipe,
} from "./pageTypography";
import {
  BESTSELLERS_TYPOGRAPHY,
  COMPLETE_SHELF_TYPOGRAPHY,
  KAGE_TYPOGRAPHY,
  SYLVA_TYPOGRAPHY,
} from "./pageRecipes";

const SANDBOX_PERMISSIONS =
  "allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts";

export type LandingPageFrameProps = {
  className?: string;
  sourceUrl: string;
  srcDoc?: string;
  style?: CSSProperties;
  title: string;
  customization?: LandingPageCustomization;
};

export type LandingPageProps = Omit<LandingPageFrameProps, "sourceUrl" | "title" | "customization">;

export function LandingPageFrame({
  className = "",
  customization,
  sourceUrl,
  srcDoc,
  style,
  title,
}: LandingPageFrameProps): JSX.Element {
  const [ready, setReady] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    applyPageCustomization(frameRef.current, customization);
  }, [customization]);

  return (
    <div
      className={`threeui-background landing-page-frame${className ? ` ${className}` : ""}`}
      data-state={ready ? "ready" : "loading"}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#080808",
        pointerEvents: "auto",
        ...style,
      }}
    >
      <iframe
        ref={frameRef}
        title={title}
        {...(srcDoc ? { srcDoc } : { src: sourceUrl })}
        sandbox={SANDBOX_PERMISSIONS}
        loading="eager"
        onLoad={(e) => {
          applyPageCustomization(e.currentTarget, customization);
          setReady(true);
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#080808",
        }}
      />
    </div>
  );
}

type RecipeLandingPageProps = LandingPageProps &
  PageTypographyProps & {
    recipe: PageTypographyRecipe;
    title: string;
    sourceUrl: string;
  };

function RecipeLandingPage({
  recipe,
  title,
  sourceUrl,
  ...rest
}: RecipeLandingPageProps): JSX.Element {
  const [typoProps, frameProps] = splitTypographyProps(rest);
  const customization = usePageTypography(recipe, typoProps);
  return (
    <LandingPageFrame
      {...frameProps}
      customization={customization}
      title={title}
      sourceUrl={sourceUrl}
    />
  );
}

export function KageLandingPage(props: LandingPageProps & PageTypographyProps): JSX.Element {
  return (
    <RecipeLandingPage
      {...props}
      recipe={KAGE_TYPOGRAPHY}
      title="Itz_jack~! — Developer | Building real-world projects"
      sourceUrl="/landing-pages/kage.html"
    />
  );
}

export function CompleteShelfLandingPage(
  props: LandingPageProps & PageTypographyProps
): JSX.Element {
  return (
    <RecipeLandingPage
      {...props}
      recipe={COMPLETE_SHELF_TYPOGRAPHY}
      title="Working Volumes — Seven Tools for Making"
      sourceUrl="/landing-pages/complete-shelf-v2.html"
    />
  );
}

export function BestsellersBookShowcase(
  props: LandingPageProps & PageTypographyProps
): JSX.Element {
  return (
    <RecipeLandingPage
      {...props}
      recipe={BESTSELLERS_TYPOGRAPHY}
      title="Field Manuals — Tools for Thought"
      sourceUrl="/landing-pages/bestsellers-book-showcase.html"
    />
  );
}

export function MengToSketchbookLandingPage(props: LandingPageProps): JSX.Element {
  return (
    <LandingPageFrame
      {...props}
      title="Meng To — Singapore Sketchbook"
      sourceUrl="/landing-pages/meng-to-sketchbook.html"
    />
  );
}

export function SylvaHero(props: LandingPageProps & PageTypographyProps): JSX.Element {
  return (
    <RecipeLandingPage
      {...props}
      recipe={SYLVA_TYPOGRAPHY}
      title="Sylva — Into the living world"
      sourceUrl="/landing-pages/inner-green-3d.html"
    />
  );
}
