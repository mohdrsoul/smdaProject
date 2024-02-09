#pragma warning disable SA1633 // File should have header
using Microsoft.AspNetCore.Mvc;
#pragma warning restore SA1633 // File should have header
using Microsoft.AspNetCore.Mvc.ViewEngines;
using smdaProject.Models;
using smdaProject.Services;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;



namespace smdaProject.Controllers
{
    public class SearchController : RenderController
    {
        private readonly IPublishedValueFallback _publishedValueFallback;
        private readonly ISearchService _searchService;

        public SearchController(
            ILogger<RenderController> logger,
            ICompositeViewEngine compositeViewEngine,
            IUmbracoContextAccessor umbracoContextAccessor,
            IPublishedValueFallback publishedValueFallback,
            ISearchService searchService)
            : base(logger,
                compositeViewEngine,
                umbracoContextAccessor)
        {
            _publishedValueFallback = publishedValueFallback;
            _searchService = searchService;
        }

        public override IActionResult Index()
        {
            // Get the queryString from the request
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
            string queryString = HttpContext.Request.Query["query"];
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.

            // Create the view model and pass it to the view
#pragma warning disable CS8604 // Possible null reference argument.
            SearchViewModel viewModel = new(CurrentPage!, _publishedValueFallback)
            {
                SearchResults = _searchService.SearchContentNames(queryString),
                HasSearched = !string.IsNullOrEmpty(queryString),
            };
#pragma warning restore CS8604 // Possible null reference argument.

            return CurrentTemplate(viewModel);
        }
    }
}
