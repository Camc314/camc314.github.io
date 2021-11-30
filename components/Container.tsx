import Head from 'next/head';
import React from 'react';

/**
 * Allows the setting of the page title in the <Head /> element
 *
 * @param {string} pageTitle - The title of the page
 * @returns {React.ReactElement} - The returned element
 */
export default function Container({
  pageTitle,
  children
}: {
  pageTitle?: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </div>
  );
}
