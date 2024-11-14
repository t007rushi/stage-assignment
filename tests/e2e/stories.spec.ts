import { test, expect } from '@playwright/test';

test.describe('Stories Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display stories list', async ({ page }) => {
    const storiesList = await page.locator('[data-testid="stories-list"]');
    await expect(storiesList).toBeVisible();
    
    const storyPreviews = await page.locator('[data-testid^="story-preview-"]');
    await expect(storyPreviews).toHaveCount(6);
  });

  test('should open story viewer when clicking a story', async ({ page }) => {
    const firstStoryPreview = await page.locator('[data-testid="story-preview-1"]');
    await firstStoryPreview.click();
    
    const viewer = await page.locator('[data-testid="stories-viewer"]');
    await expect(viewer).toBeVisible();
  });

  test('should navigate between stories', async ({ page }) => {
    await page.locator('[data-testid="story-preview-1"]').click();

    const initialSrc = await page.locator('[data-testid="story-image"]').getAttribute('src');
    
    await page.locator('[data-testid="next-story-area"]').click();
    
    const newSrc = await page.locator('[data-testid="story-image"]').getAttribute('src');
    
    expect(initialSrc).not.toBe(newSrc);
  });

  test('should close story viewer', async ({ page }) => {
    await page.locator('[data-testid="story-preview-1"]').click();
    await page.locator('[data-testid="close-stories"]').click();
    
    const viewer = await page.locator('[data-testid="stories-viewer"]');
    await expect(viewer).not.toBeVisible();
  });

  test('should auto-advance story after timeout', async ({ page }) => {
    await page.locator('[data-testid="story-preview-1"]').click();

    const initialSrc = await page.locator('[data-testid="story-image"]').getAttribute('src');
    
    await page.waitForTimeout(5500); // Wait for 5.5 seconds for auto-advance
    
    const newSrc = await page.locator('[data-testid="story-image"]').getAttribute('src');
    
    expect(initialSrc).not.toBe(newSrc);
  });

  test('should pause story progress on touch/mouse hold', async ({ page }) => {
    await page.locator('[data-testid="story-preview-1"]').click();
    
    const initialProgress = await page.locator('[data-testid="story-progress"]').evaluate(el => 
      el.style.width
    );
    
    await page.mouse.down(); 
    await page.waitForTimeout(1000);
    
    const progressAfterHold = await page.locator('[data-testid="story-progress"]').evaluate(el => 
      el.style.width
    );
    
    expect(initialProgress).toBe(progressAfterHold);
    
    await page.mouse.up();
  });
});
