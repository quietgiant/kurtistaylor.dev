# Personal Website

A clean, minimal personal website built with HTML5 and Tailwind CSS.

## Structure

- `index.html` - Home page with profile section and social links
- `about.html` - About page with placeholder content

## Customization

### Profile Picture
Replace the placeholder profile picture section in `index.html`:
```html
<div class="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
    <span class="text-gray-500 text-sm">Profile Photo</span>
</div>
```

With:
```html
<img src="your-profile-picture.jpg" alt="Kurtis Taylor" class="w-32 h-32 mx-auto rounded-full object-cover">
```

### Social Links
Update the `href="#"` attributes in the social links section with your actual URLs:
- Twitter: Update the first link
- GitHub: Update the second link  
- LinkedIn: Update the third link
- Resume: Update the fourth link to point to your PDF file

### About Content
Replace the placeholder content in `about.html` with your personal story and background.

### Bio Text
Update the bio text on the home page:
```html
<p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
    Software engineer passionate about building clean, efficient solutions.
</p>
```

## Usage

Simply open `index.html` in your web browser to view the site locally, or deploy the files to any web hosting service. 